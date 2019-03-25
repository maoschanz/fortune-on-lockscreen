#!/bin/bash

if (( $EUID == 0 )); then

	if [ ! -d "/usr/share/gnome-shell/extensions" ]; then
		mkdir /usr/share/gnome-shell/extensions
	fi
	
	INSTALL_DIR="/usr/share/gnome-shell/extensions"

else

	if [ ! -d "$HOME/.local/share/gnome-shell/extensions" ]; then
		mkdir $HOME/.local/share/gnome-shell/extensions
	fi
	
	INSTALL_DIR="$HOME/.local/share/gnome-shell/extensions"

fi

echo "Installing extension files in $INSTALL_DIR/fortune-on-lockscreen@maestroschan.fr"

cp -r fortune-on-lockscreen@maestroschan.fr $INSTALL_DIR

echo "Done."

exit

