// Getting values from HTML
var textarea_number1 = document.getElementById("color_hex_value1");
var textarea_number2 = document.getElementById("color_hex_value2");
var textarea_number3 = document.getElementById("color_hex_value3");
var textarea_number4 = document.getElementById("color_hex_value4");
var textarea_number5 = document.getElementById("color_hex_value5");

var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var color3 = document.getElementById("color3");
var color4 = document.getElementById("color4");
var color5 = document.getElementById("color5");

var locked1 = false;
var locked2 = false;
var locked3 = false;
var locked4 = false;
var locked5 = false;

var unlocked_list = [0, true, true, true, true, true]; // color1, color2... etc.

// Changing locked/unlocked state of colors
function Lock(locking_number)
{
        switch (locking_number)
        {
                case 1:
                        if (unlocked_list[1] === true)
                        {
                                unlocked_list[1] = false;
                        }
                        if (unlocked_list[1] === false)
                        {
                                unlocked_list[1] = true;
                        }
                        break;

                case 2:
                        if (unlocked_list[2] === true)
                        {
                                unlocked_list[2] = false;
                        }
                        if (unlocked_list[2] === false)
                        {
                                unlocked_list[2] = true;
                        }
                        break;

                case 3:
                        if (unlocked_list[3] === true)
                        {
                                unlocked_list[3] = false;
                        }
                        if (unlocked_list[3] === false)
                        {
                                unlocked_list[3] = true;
                        }
                        break;

                case 4:
                        if (unlocked_list[4] === true)
                        {
                                unlocked_list[4] = false;
                        }
                        if (unlocked_list[4] === false)
                        {
                                unlocked_list[4] = true;
                        }
                        break;

                case 5:
                        if (unlocked_list[5] === true)
                        {
                                unlocked_list[5] = false;
                        }
                        if (unlocked_list[5] === false)
                        {
                                unlocked_list[5] = true;
                        }
                        break;
        }
}

// Generating colors
function ComponentToHex(c)
{
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
}

function RGBToHex(r, g, b)
{
        return " #" + ComponentToHex(r) + ComponentToHex(g) + ComponentToHex(b);
}

function GenerateColor(color_or_hex)
{
        if (color_or_hex === 1)
        {
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var random_color = "rgb(" + x + "," + y + "," + z + ")";
                return random_color;
        }
        if (color_or_hex === 0)
        {
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var random_color = "rgb(" + x + "," + y + "," + z + ")";
                var hex_value = RGBToHex(x, y, z);
                return hex_value.toUpperCase();
        }
}

function ChangeColor()
{
        for (var i = 0; i < unlocked_list.length; i++)
        {
                if (unlocked_list[i] === true)
                {
                        switch (i)
                        {
                                case 1:
                                        var random_color = GenerateColor(1);
                                        var hex_value = GenerateColor(0);
                                        color1.style.background = random_color;
                                        textarea_number1.innerText = hex_value;
                                        break;

                                case 2:
                                        var random_color = GenerateColor(1);
                                        var hex_value = GenerateColor(0);
                                        color2.style.background = random_color;
                                        textarea_number2.innerText = hex_value;
                                        break;

                                case 3:
                                        var random_color = GenerateColor(1);
                                        var hex_value = GenerateColor(0);
                                        color3.style.background = random_color;
                                        textarea_number3.innerText = hex_value;
                                        break;

                                case 4:
                                        var random_color = GenerateColor(1);
                                        var hex_value = GenerateColor(0);
                                        color4.style.background = random_color;
                                        textarea_number4.innerText = hex_value;
                                        break;

                                case 5:
                                        var random_color = GenerateColor(1);
                                        var hex_value = GenerateColor(0);
                                        color5.style.background = random_color;
                                        textarea_number5.innerText = hex_value;
                                        break;
                        }
                }
        }
}

// Upon opening the site get radnom colors duh
ChangeColor();

// Copy the color to clipboard
function CopyToClipboard(textarea_number)
{
        // hex_value_TBC means = hex value To Be Copied
        if (textarea_number === 1)
        {
                var hex_value_TBC = document.getElementById("color_hex_value1");
        }
        if (textarea_number === 2)
        {
                var hex_value_TBC = document.getElementById("color_hex_value2");
        }
        if (textarea_number === 3)
        {
                var hex_value_TBC = document.getElementById("color_hex_value3");
        }
        if (textarea_number === 4)
        {
                var hex_value_TBC = document.getElementById("color_hex_value4");
        }
        if (textarea_number === 5)
        {
                var hex_value_TBC = document.getElementById("color_hex_value5");
        }

        hex_value_TBC.disabled = false;
        hex_value_TBC.select();
        hex_value_TBC.setSelectionRange(0, 10);
        hex_value_TBC.disabled = true;
        document.execCommand("copy");
        alert("Copied the color value: " + hex_value_TBC.value);
}

// Download colors as txt file
