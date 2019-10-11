'use strict';
angular.module('myApp',
		[
			"ngSanitize",
			"com.2fdevs.videogular",
			"com.2fdevs.videogular.plugins.controls",
			"com.2fdevs.videogular.plugins.overlayplay",
			"com.2fdevs.videogular.plugins.poster",
			"com.2fdevs.videogular.plugins.buffering"
		]
	)
	.controller('HomeCtrl',
		["$sce", "$timeout", function ($sce, $timeout) {
			var controller = this;
			controller.state = null;
			controller.API = null;
			controller.currentVideo = 0;

			controller.onPlayerReady = function(API) {
				controller.API = API;
			};

			controller.onCompleteVideo = function() {
				controller.isCompleted = true;

				controller.currentVideo++;

				if (controller.currentVideo >= controller.videos.length) controller.currentVideo = 0;

				controller.setVideo(controller.currentVideo);
			};

			controller.videos = [
			{
				sources: [
					{src: $sce.trustAsResourceUrl("assets/videos/AD.mp4"), type: "video/mp4"},
					
				]
			},
			{
				sources: [
					{src: $sce.trustAsResourceUrl("assets/videos/Animation.mp4"), type: "video/mp4"},
					
				]
			},
			{
				sources: [
					{src: $sce.trustAsResourceUrl("assets/videos/My_animation.mp4"), type: "video/mp4"},
					
				]
			},
			{
				sources: [
					{src: $sce.trustAsResourceUrl("assets/videos/History.mp4"), type: "video/mp4"},
					
				]
			}
			
		];

			controller.config = {
				preload: "none",
				autoHide: false,
				autoHideTime: 3000,
				autoPlay: false,
				sources: controller.videos[0].sources,
				theme: {
					url: "https://unpkg.com/videogular@2.1.2/dist/themes/default/videogular.css"
				},
				plugins: {
					poster: "assets/images/red.jpg"
				}
			};

			controller.setVideo = function(index) {
				controller.API.stop();
				controller.currentVideo = index;
				controller.config.sources = controller.videos[index].sources;
				$timeout(controller.API.play.bind(controller.API), 100);
			};
		}]
	);
