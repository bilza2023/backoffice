<script>
	import { cn } from "$lib/utils2.js";
	let className = undefined;
	export { className as class };
</script>

<span
	class={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)}
	{...$$restProps}
>
	<slot />
</span>
