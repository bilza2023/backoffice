<script>
export let href = '/';

</script>

<div class="flex justify-center bg-blue-700 text-white text-2xl mx-20 rounded-md  text-center">


  <a class='w-8/12   p-4   hover:bg-green-700 hover:cursor-pointer'
  href={href}>
  <slot></slot>
  </a>
  
  
</div>
