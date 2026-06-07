// blooms entire screen (https://github.com/hyprland-community/awesome-hyprland/issues/22#issuecomment-1682012576) credit to https://github.com/mekb-turtle
#version 330 core

precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;

uniform int bloomRadius = 10;
uniform float bloomIntensity = 0.7f;
uniform float bloomThreshold = 0.4f;

void main() {
	vec4 color = texture(tex, v_texcoord);

	vec4 bloomThreshold4 = vec4(bloomThreshold);
	bloomThreshold4.w = 0.0f;

	vec2 invTextureSize = 1.0f / textureSize(tex, 0);
	float invBloomRadius = bloomRadius == 0 ? 1.0f : 1.0f / float(bloomRadius);
	float invBloomThreshold = 1.0f / (1.0f - bloomThreshold);

	float samples = 0.0f;
	vec4 colorSum = vec4(0.0f);
	
	for (int x = -bloomRadius; x <= bloomRadius; ++x) {
		for (int y = -bloomRadius; y <= bloomRadius; ++y) {
			vec2 offset = vec2(x, y) * invTextureSize;

			vec2 coords = v_texcoord + offset;
			vec4 color = texture(tex, coords);
			color = max(color - bloomThreshold, vec4(0.0f));

			float strength = 1 - (length(offset) * invBloomRadius);
			samples += strength;

			strength *= max(max(color.x, color.y), color.z) * invBloomThreshold;

			strength *= bloomIntensity;
			colorSum += color * strength;
		}
	}

	colorSum /= samples;
	gl_FragColor = min(color + colorSum, 1.0f);
}