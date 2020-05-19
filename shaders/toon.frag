#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    float red = round(FragColor.r * 4) / 4;
    float green = round(FragColor.g * 4) / 4;
    float blue = round(FragColor.b * 4) / 4;
    float alpha = FragColor.a;
    FragColor = vec4(red, green, blue, alpha);

}
