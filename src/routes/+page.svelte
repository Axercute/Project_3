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

<div class="flex-center text-white bg-red-800">
    <div class="font-semibold text-white">Treatment Solution For:</div>
</div>
<div>

</div>