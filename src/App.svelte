<script>
	import QuePasa from "./Components/QuePasa.svelte";
	import Quienes from "./Components/Quienes.svelte";
	import QueInvestigamos from "./Components/QueInvestigamos.svelte";
	import ComoParticipamos from "./Components/ComoParticipamos.svelte";
	
</script>

<main>
	<div class="background-1">
		<QuePasa/>
	</div>
	<div class="background-2">
		<Quienes/>
		<QueInvestigamos/>
	</div>
		<ComoParticipamos/>
	
	
</main>

<style>
	.background-1{
		background-image: url("/images/Gradienthome.png");
		background-repeat: no-repeat;
		background-size: auto;
	}

	.background-2{
		background: url("/images/Right.png");
		background-repeat: no-repeat;
		background-position: right top;
		
	}
</style>