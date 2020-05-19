#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texture_coordinate = vec2((texcoord.x*2.0f)-1.0f, texcoord.x*2.0f)-1.0f);
    float theta = atan(texture_coordinate.y, texture_coordinate.x);
    float radius = pow(length(texture_coordinate), 1.5);
    vec2 final = vec2(radius * cos(theta), radius * sin(theta));
    FragColor = texture(image, final);
}
