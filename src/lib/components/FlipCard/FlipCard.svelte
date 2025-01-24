<script>
</script>

<!-- From Uiverse.io by Pradeepsaranbishnoi -->
<!-- From Uiverse.io by eslam-hany -->
<!-- From Uiverse.io by gharsh11032000 -->
<div class="card shadow-dark shadow-lg w-full">
	<slot name="icon"></slot>
	<div class="card__content">
		<slot class="card__title" name="title"></slot>
		<slot class="card__description !text-white" name="description"></slot>
	</div>
</div>

<style>
	/* From Uiverse.io by gharsh11032000 */
	.card {
		position: relative;
		width: 300px;
		height: 200px;
		background-color: #161b22;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		perspective: 1000px;
		box-shadow: 0 0 0 5px #313640;
		transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.card svg {
		width: 48px;
		fill: #333;
		transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.card:hover {
		transform: scale(1.05);
		box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
	}

	.card__content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 20px;
		box-sizing: border-box;
		background-color: #202b3d;
		transform: rotateX(-90deg);
		transform-origin: bottom;
		transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.card:hover .card__content {
		transform: rotateX(0deg);
	}

	.card__title {
		margin: 0;
		font-size: 24px;
		color: #b8e3e9;
		font-weight: 700;
	}

	.card:hover svg {
		scale: 0;
	}

	.card__description {
		margin: 10px 0 0;
		font-size: 14px;
		color: #b8e3e9;
		line-height: 1.4;
	}
</style>
