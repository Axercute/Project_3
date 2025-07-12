<script>
    const problems ={
    Fatigue_or_Insomnia:["Herbal Medication","Acupuncture"],
    Hormonal_Imbalances:["Herbal Medication","Acupuncture"],
    Menstrual_Irregularities:["Herbal Medication","Acupuncture"],
    Cold_And_Flu:["Herbal Medication","Acupuncture"],
    Chronic_Pain_or_Inflammation:["Herbal Medication","Acupuncture"],
    }
    import {goto} from "$app/navigation"
</script>
<div class="relative w-full h-auto">
  <img src="/tuina.jpg" alt="Tui na" class="w-full h-auto" />
  <button class="absolute top-[70%] left-[50%] rounded-2xl text-white bg-red-800
    shadow translate-x-[-50%] translate-y-[-50%]" onclick={()=>{goto("./booking")}}>
   Book Appointment 
  </button>
</div>

<div class="flex-center text-white bg-red-800 font-semibold">Treatment Solution For:</div>

<div class="flex-center flex-col">
<img src = "/treatmentPics/digestion.jpg" alt ="digestion" class="w-1/4 h-20 rounded-2xl mt-2 relative"/>
<div class="bg-red-800 text-white w-1/4 text-center m-0 rounded-2xl">Digestion Problem</div>
</div>  