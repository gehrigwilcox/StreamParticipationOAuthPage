# How to Install

## Install Fabric
[Follow the official fabric install guide here.](https://fabricmc.net/wiki/install)

## Download Fabric API
[Download fabric API here](https://www.curseforge.com/minecraft/mc-mods/fabric-api)

## Download Stream Participation
[Download Stream Participation here](https://www.curseforge.com/minecraft/mc-mods/stream-participation)

## Install Stream Participation Twitch Extension
[Install Twitch Extension here](https://dashboard.twitch.tv/extensions/4q5z8e66v37d6my1ip3cn15qnxmlf3)

## Install Mods
1. Launch Minecraft
2. Go to Options
![](/Installation_Tutorial_Pics/Minecraft_Title_Screen.png)
3. Go to Resource Packs
![](/Installation_Tutorial_Pics/Minecraft_Resource_Packs.png)
4. Open Resource Pack Folder
![](/Installation_Tutorial_Pics/Minecraft_Open_Pack_Folder.png)
5. Go back a directory to the minecraft folder
![](/Installation_Tutorial_Pics/Files_minecraft_folder.png)
6. Open Mods folder
![](/Installation_Tutorial_Pics/Files_Mods_folder_selected.png)
7. Place Fabric API and Stream Participation jars you downloaded in mod folder
![](/Installation_Tutorial_Pics/Files_install_mod.png)
8. Re-launch Minecraft

## Set up Mod
1. Join a world
2. Click message in chat
![](/Installation_Tutorial_Pics/Minecraft_Get_OAuth.png)
3. Click yes to open link
![](/Installation_Tutorial_Pics/Minecraft_open_link.png)
4. Log in to twitch and accept permissions
5. Copy command at top of page
![](/Installation_Tutorial_Pics/Website_OAuth_Website.png)
6. Paste and run command in Minecraft
![](/Installation_Tutorial_Pics/Minecraft_Command.png)

## Configure mod
1. Get back to minecraft folder (follow steps 1-5 in Install Mods)
![](/Installation_Tutorial_Pics/Files_Config_folder_selected.png)
2. Open config folder
![](/Installation_Tutorial_Pics/Files_Config_file_selected.png)
3. Open streamparticipation.json file
![](/Installation_Tutorial_Pics/Opened_Config_File.png)
4. Content inside the `"players":{}` is player information. *DO NOT TOUCH*
5. Content inside `"allowedEvents": {}` is event information.


## Information about config
  Each entry is the event name and it has `"cost"` and `"command"`.

  The event name can be whatever you want. You can create a category (kinda like
    a folder on your computer) by separating the category name and the event
    name with a forward slash (/). For example, `weather/clear` is an event
    named `clear` located in the `weather` category.

  Cost is the minimum amount of bits needed to run the event.
    This number can be 50-10000, in increments of 50.

  Command is the command to run when the event is run.

## Configure Extension
First: Make sure you have fully set up minecraft, and connected the mod with twitch.
[Go to the extension page and click Configure on the top right](https://dashboard.twitch.tv/extensions/4q5z8e66v37d6my1ip3cn15qnxmlf3)
1. Select an event you want to configure
![](/Installation_Tutorial_Pics/Configure_Extension.png)
2. Event details will appear in the middle of the screen. You may set the cost
  to whatever you feel is right for your stream. It cannot go lower than the
  mods configured minimum amount, and can go as high as 10000
3. Enabled establishes if it can be used on your stream.
4. Hit the Save Event button when you have the settings you want.
