#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    FragColor = texture(image, texcoord);
    float luminance = 0.299*FragColor.r + 0.587*FragColor.g + 0.114*FragColor.b;
    float alpha = FragColor.a;
    FragColor = vec4(luminance, luminance, luminance, alpha);
}
