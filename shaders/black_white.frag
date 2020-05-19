#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 frag = texture(image, texcoord);
    float luminance = 0.299f * frag.r + 0.587f * frag.g + 0.114f * frag.b;
    float alpha = frag.a;
    FragColor = vec4(luminance, luminance, luminance, alpha);
}
