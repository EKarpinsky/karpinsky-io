<script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { GithubSolid, LinkedinSolid, EnvelopeSolid } from 'flowbite-svelte-icons';
	import profilePic from '../assets/profile_pic.jpeg';
</script>

<div class="dark min-h-dvh flex flex-col items-center justify-center bg-gray-900 text-white">
	<header class="w-full px-4 md:px-6 h-20 flex items-center justify-between text-gray-300">
		<a class="flex items-center justify-center" href="/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-6 w-6"
			>
				<polyline points="16 18 22 12 16 6"></polyline>
				<polyline points="8 6 2 12 8 18"></polyline>
			</svg>
			<span class="ml-1.5 hidden md:inline">Karpinsky.io</span>
		</a>
	</header>
	<main class="w-full flex-1 flex flex-col items-center justify-start">
		<section class="w-full pb-16 md:pb-24 lg:pb-64 py-20">
			<div class="w-full space-y-12 dark py-10">
				<div class="flex flex-col items-center space-y-6 text-center">
					<img
						src={profilePic}
						width="200"
						height="200"
						alt="Karpinsky"
						class="rounded-full shadow-lg"
						style="aspect-ratio: 200 / 200; object-fit: cover; object-position: 50% 20%"
					/>
					<div class="w-full space-y-2">
						<h1 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							Eli Karpinsky<span class="typewriter-wrapper">
								<Typewriter
									loop={true}
									interval={150}
									mode="loopRandom"
									cursor={true}
									element="span"
									wordInterval={2000}
									unwriteInterval={100}
								>
									<span class="text-gray-500">.js</span>
									<span class="text-gray-500">.css</span>
									<span class="text-gray-500">.tsx</span>
									<span class="text-gray-500">.sql</span>
									<span class="text-gray-500">.gql</span>
									<span class="text-gray-500">.io</span>
									<span class="text-gray-500">.dev</span>
									<span class="text-gray-500">.scss</span>
									<span class="text-gray-500">.ts</span>
									<span class="text-gray-500">.html</span>
									<span class="text-gray-500">.py</span>
									<span class="text-gray-500">.yaml</span>
								</Typewriter></span
							>
						</h1>
						<h3
							class="text-gray-300 text-sm/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							<span>Systems design</span> <span>&bullet;</span> <span>Consulting</span>
						</h3>
						<h3
							class="text-gray-300 text-sm/relaxed md:text-lg/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							<span>Full-stack web apps</span> <span>&bullet;</span>
							<span>Cloud & DevOps</span>
						</h3>
					</div>
					<div class="flex gap-4">
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex h-9 items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							href="https://github.com/EKarpinsky"
						>
							<GithubSolid class="mr-2 h-4 w-4" />
							GitHub
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex h-9 items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							href="https://www.linkedin.com/in/eli-karpinsky-074103197/"
						>
							<LinkedinSolid class="mr-2 h-4 w-4" />
							LinkedIn
						</a>
						<a
							class="inline-flex h-9 items-center justify-center rounded-md bg-gray-800 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
							href="mailto:eli@karpinsky.io"
						>
							<EnvelopeSolid class="mr-2 h-4 w-4" />
							Email
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	:root {
		--cursor-width: 5px;
	}
	h3 {
		& span {
			display: inline-block;
			width: 45%;
			&:first-child {
				text-align: right;
			}
			&:last-child {
				text-align: left;
			}
			&:nth-child(2) {
				width: auto;
			}
		}
	}
	.typewriter-wrapper {
		width: 75px;
		display: inline-block;
		text-align: left;
		font-size: 1rem;
		@media (min-width: 640px) {
			font-size: 1.5rem;
		}
	}
	h1 {
		/*	negative margin to account for the typewriter-wrapper width*/
		margin-right: -75px;
	}
	main a {
		transition: 0.2s;
		border-radius: 0.375rem;
		border: 1px solid #4b5563;

		&:hover {
			background-color: rgba(255, 0, 0, 0.1);
			transform: scale(1.05);
		}
	}
</style>
