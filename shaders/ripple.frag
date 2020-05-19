#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texture_coordinate = vec2((texcoord.x*2.0f)-1.0f, texcoord.x*2.0f)-1.0f);
    float radius = length(texture_coordinate);
    float offset_x = texture_coordinate.x * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    float offset_y = texture_coordinate.y * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;
    vec2 offset = vec2(offset_x, offset_y);
    vec2 final = texture_coordinate + offset;
    FragColor = texture(image, final);
}
