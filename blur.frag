// blurs whole screen (https://github.com/hyprland-community/awesome-hyprland/issues/22#issuecomment-1681505196) credit to https://github.com/mekb-turtle
#version 330 core

precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;

uniform int blurRadius = 1;

void main() {
	if (blurRadius <= 0) {
		gl_FragColor = texture(tex, v_texcoord);
		return;
	}

	vec2 invTextureSize = 1.0f / textureSize(tex, 0);
	float invBlurRadius = 1.0f / float(blurRadius);

	float samples = 0.0f;
	vec4 colorSum = vec4(0.0f);
	
	for (int x = -blurRadius; x <= blurRadius; ++x) {
		for (int y = -blurRadius; y <= blurRadius; ++y) {
			vec2 offset = vec2(x, y) * invTextureSize;

			float strength = 1 - (length(offset) * invBlurRadius);
			samples += strength;

			vec2 coords = v_texcoord + offset;
			colorSum += texture(tex, coords) * strength;
		}
	}
	
	colorSum /= samples;
	gl_FragColor = colorSum;
}