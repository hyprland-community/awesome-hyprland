// monochrome filter (https://github.com/hyprland-community/awesome-hyprland/issues/22#issuecomment-1717441686) credit to https://github.com/ed-henrique
precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;

void main() {
   vec4 pixColor = texture2D(tex, v_texcoord);

   float lum = dot(pixColor.rgb, vec3(0.299, 0.587, 0.114));       // BT.601
   // float lum = dot(pixColor.rgb, vec3(0.2126, 0.7152, 0.0722)); // BT.709
   // float lum = dot(pixColor.rgb, vec3(0.2627, 0.6780, 0.0593)); // BT.2100
   // Check https://en.wikipedia.org/wiki/Grayscale#Luma_coding_in_video_systems for more information about which one to choose

   vec4 outCol = vec4(vec3(lum), pixColor.a);
   gl_FragColor = outCol;
}