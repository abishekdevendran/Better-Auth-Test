<script lang="ts">
	import { authClient } from '$lib/client';
	import { onMount } from 'svelte';
	const session = authClient.useSession();
	const { data } = $props();

	onMount(async () => {
		if (!data.session) {
			await authClient.oneTap();
		}
	});
</script>

<div>
	{#if $session.data}
		<div>
			<p>
				{$session?.data?.user.name}
			</p>
			<button
				onclick={async () => {
					await authClient.signOut();
				}}
			>
				Sign Out
			</button>
		</div>
	{:else}
		<button
			onclick={async () => {
				await authClient.signIn.social({
					provider: 'google'
				});
			}}
		>
			Continue with Google
		</button>
	{/if}
</div>
