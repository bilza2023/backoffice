<script>
	import { Command as CommandPrimitive } from "cmdk-sv";
	import { cn } from "$lib/utils2.js";
	let className = undefined;
	export { className as class };
</script>

<CommandPrimitive.Separator class={cn("bg-border -mx-1 h-px", className)} {...$$restProps} />
