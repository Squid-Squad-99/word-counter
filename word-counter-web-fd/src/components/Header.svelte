<script>
	import { APP_NAME } from '../constants';
</script>

<header class=" px-16 py-6">
	<nav class=" flex flex-wrap items-center justify-between">
		<div class=" flex items-center">
			<a href="/" class=" font-bold">
				{APP_NAME}
			</a>
		</div>

		<div class="hidden lg:block">
			<ul class="flex">
				<li><a href="/about" class="px-4 py-2 hover:bg-gray-700 font-sans">About</a></li>
				<li><a href="/contact" class="px-4 py-2 hover:bg-gray-700">Contact</a></li>
			</ul>
		</div>
	</nav>
</header>
