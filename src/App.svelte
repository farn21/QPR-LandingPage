<script>
	import QuePasa from "./Components/QuePasa.svelte";
	import Quienes from "./Components/Quienes.svelte";
	import QueInvestigamos from "./Components/QueInvestigamos.svelte";
	import ComoParticipamos from "./Components/ComoParticipamos.svelte";
	import DatosAbiertos from "./Components/DatosAbiertos.svelte";
	import RecursosyMateriales from "./Components/RecursosyMateriales.svelte";
	
</script>

<main>
	<div class="background-1">
		<QuePasa/>
	</div>
	<div class="background-2">
		<Quienes/>
		<QueInvestigamos/>
	</div>
	<div class="background-3">
		<ComoParticipamos/>
		<DatosAbiertos/>
		<RecursosyMateriales/>
	</div>
	
	
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

	.background-3{
		background: url("/images/Left.png");
		background-repeat: no-repeat;
		background-position: left top;
	}

	@media screen and (max-width: 900px){
        .background-2{
			background: none;
		}
		.background-3{
			background: none;
		}
    }
</style>