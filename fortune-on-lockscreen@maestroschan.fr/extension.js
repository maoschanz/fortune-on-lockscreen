
const Main = imports.ui.main;
const MessageTray = imports.ui.messageTray;
const GLib = imports.gi.GLib;

function init() {}

class FortuneSource extends MessageTray.Source {
	constructor() {
		super('Fortune', 'dialog-information-symbolic');
	}

	_createPolicy() {
		return new MessageTray.NotificationPolicy({
			enable: true,
			enableSound: false,
			showBanners: true,
			forceExpanded: true,
			showInLockScreen: true,
			detailsInLockScreen: true
		});
	}

	open() {
		this.destroy();
	}
};

function tellFortune() {
	let s = new FortuneSource();
	Main.messageTray.add(s);
	
	let fortune = ''
	let [res, out] = GLib.spawn_sync(null, ['fortune'], null, GLib.SpawnFlags.SEARCH_PATH, null);
	if(out == null) {
		fortune = _("Error executing command.");
	} else {
		fortune = out.toString();
	}

	let notification = new MessageTray.Notification(s, '🐄', fortune);
	notification.setTransient(true);
	s.notify(notification);
};

function enable() {
//	tellFortune();
}

function disable() {
	tellFortune();
}

