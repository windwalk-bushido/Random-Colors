// Dark/Light mode
function DarkLightMode(path, mode)
{
        if (mode === "dark")
        {
                var fileref = document.createElement("link");
                fileref.setAttribute("rel", "stylesheet");
                fileref.setAttribute("type", "text/css");
                fileref.setAttribute("href", path);
        }
        else if (mode === "light")
        {
                var fileref = document.createElement("link");
                fileref.setAttribute("rel", "stylesheet");
                fileref.setAttribute("type", "text/css");
                fileref.setAttribute("href", path);
        }

        document.getElementsByTagName("head")[0].appendChild(fileref);
}

var mode_flag = 0;
function ActivateMode()
{
        if (mode_flag === 0)
        {
                DarkLightMode("css/my_css/webmenu-dark.css", "dark");
                DarkLightMode("css/my_css/main-dark.css", "dark");
                mode_flag = 1;
        }
        if (mode_flag === 1)
        {
                DarkLightMode("css/my_css/webmenu-light.css", "light");
                DarkLightMode("css/my_css/main-light.css", "light");
                mode_flag = 0;
        }
}
