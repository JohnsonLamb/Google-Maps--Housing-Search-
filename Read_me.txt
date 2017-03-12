Google Maps Housing Search

>Prolog:

This project serves two purposes:

- Continue to practice JavaScript and the ability to use APIs
- Build a simple tool to help with searching for a new place to live.

>Purpose of the Tool

This tool is intended to allow the user to create a database containing the following:

- Adresses of suitable houses (House)
- Areas suitable (Suitbale Area) to live in
- Adresses of Schools (School)
- Adresses of Shops (Shop)
- Adresses of Public Tranportation (PubTrans)

With this information, it is intended for the user to be able to:

- Select a Suitable Area or a House and see how many Schools, Shops and PubTrans are nearby ("nearby" will be selected by the user)

>Using the tool

In order to use the tool on your machine you will have to follow the following steps:

-Get your own google maps API:https://support.google.com/cloud/answer/6158862.
- Don't forget to activate your API key.
- Go to the config.js file and replace the 'Nothing to see here' with your own API key. (insert the key inside brackets ' ')
- Now the application is working.

>Functionalities Implemented:

- Displays the map centered in Helsinki
- Has a textbox with autocomplete (confined to Finland) that allows to search an adress and select it. Once selected it will zoom in on it and show a small text box with the Adress text.