var paragraph1 = document.getElementById('color-hex-value-1');
var paragraph2 = document.getElementById('color-hex-value-2');
var paragraph3 = document.getElementById('color-hex-value-3');
var paragraph4 = document.getElementById('color-hex-value-4');
var paragraph5 = document.getElementById('color-hex-value-5');

var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var color3 = document.getElementById('color3');
var color4 = document.getElementById('color4');
var color5 = document.getElementById('color5');

function PadZero(str, len)
{
            len = len || 2;
            var zeros = new Array(len).join('0');
            return (zeros + str).slice(-len);
}

function InvertColor(hex, bw)
{
            if (hex.indexOf('#') === 0)
            {
                hex = hex.slice(1);
            }

            var r = parseInt(hex.slice(0, 2), 16),
                g = parseInt(hex.slice(2, 4), 16),
                b = parseInt(hex.slice(4, 6), 16);

            if (bw)
            {
                return (r * 0.299 + g * 0.587 + b * 0.114) > 186
                    ? '#000000'
                    : '#FFFFFF';
            }

            r = (255 - r).toString(16);
            g = (255 - g).toString(16);
            b = (255 - b).toString(16);

            return "#" + PadZero(r) + PadZero(g) + PadZero(b);
}

function ComponentToHex(c)
{
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
}

function RGBToHex(r, g, b)
{
        return "#" + ComponentToHex(r) + ComponentToHex(g) + ComponentToHex(b);
}

function GenerateColor()
{
        var paragraph_color = undefined;

        for (var paragraph_number = 1; paragraph_number < 6; paragraph_number++)
        {
                var x = Math.floor(Math.random() * 256);
                var y = Math.floor(Math.random() * 256);
                var z = Math.floor(Math.random() * 256);
                var random_color = "rgb(" + x + "," + y + "," + z + ")";

                var hex_value = RGBToHex(x, y, z);
                hex_value.toString(7);
                hex_value.toUpperCase();

                if (paragraph_number === 1)
                {
                        paragraph_color = InvertColor(random_color);
                        paragraph1.style.color = paragraph_color;
                        paragraph1.innerText = hex_value;
                        color1.style.background = random_color;
                }

                if (paragraph_number === 2)
                {
                        paragraph_color = InvertColor(random_color);
                        paragraph2.style.color = paragraph_color;
                        paragraph2.innerText = hex_value;
                        color2.style.background = random_color;
                }

                if (paragraph_number === 3)
                {
                        paragraph_color = InvertColor(random_color);
                        paragraph3.style.color = paragraph_color;
                        paragraph3.innerText = hex_value;
                        color3.style.background = random_color;
                }

                if (paragraph_number === 4)
                {
                        paragraph_color = InvertColor(random_color);
                        paragraph4.style.color = paragraph_color;
                        paragraph4.innerText = hex_value;
                        color4.style.background = random_color;
                }

                if (paragraph_number === 5)
                {
                        paragraph_color = InvertColor(random_color);
                        paragraph5.style.color = paragraph_color;
                        paragraph5.innerText = hex_value;
                        color5.style.background = random_color;
                }
        }
}

// Upon opening the site...
GenerateColor();
