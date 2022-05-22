<template>
	<div>
		<h1>Example of Lazy Image with a Placeholder <small>(scroll down 👇)</small></h1>

		<div class="image-wrap">
			<p>Blur</p>
			<blur-image
				src="https://cdn-images-1.medium.com/max/1600/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
				src-placeholder="https://cdn-images-1.medium.com/max/30/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
			/>
		</div>

		<div class="image-wrap">
			<p>Flip</p>
			<flip-image
				src="https://cdn-images-1.medium.com/max/1600/1*Uc2QFJLZhu8MQ9-UgupGRA.jpeg"
				src-placeholder="https://cdn-images-1.medium.com/max/30/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
			/>
		</div>

		<div class="image-wrap">
			<p>Fade in</p>
			<fade-image
				src="https://cdn-images-1.medium.com/max/1600/1*TeymfgOgswgMnEJeYoYsVg.jpeg"
				src-placeholder="https://cdn-images-1.medium.com/max/30/1*TeymfgOgswgMnEJeYoYsVg.jpeg"
			/>
		</div>

		<div class="image-wrap">
			<p>Fade in up</p>
			<fade-up-image
				src="https://cdn-images-1.medium.com/max/1600/1*CimXtSxVLsdmFqq2viRu5Q.jpeg"
				src-placeholder="https://cdn-images-1.medium.com/max/30/1*CimXtSxVLsdmFqq2viRu5Q.jpeg"
			/>
		</div>

		<div class="image-wrap">
			<p>Zoom in</p>
			<zoom-image
				src="https://cdn-images-1.medium.com/max/1600/1*V0F0-8AH8oV1LUSCbQsX4w.png"
				src-placeholder="https://cdn-images-1.medium.com/max/30/1*V0F0-8AH8oV1LUSCbQsX4w.png"
			/>
		</div>
	</div>
</template>

<script>
import BlurImage from "../components/LazyTemplates/BlurImage"
import FadeImage from "../components/LazyTemplates/FadeImage"
import FadeUpImage from "../components/LazyTemplates/FadeUpImage"
import FlipImage from "../components/LazyTemplates/FlipImage"
import ZoomImage from "../components/LazyTemplates/ZoomImage"

export default {
	components: {
		BlurImage,
		FadeImage,
		FadeUpImage,
		FlipImage,
		ZoomImage
	}
}
</script>
