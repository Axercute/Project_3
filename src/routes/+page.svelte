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
  <img src="/tuina.jpg" alt="Tui na" class="sm:w-full sm:h-auto" />
  <button class="absolute top-[70%] left-[50%] p-6 rounded-2xl 
    shadow translate-x-[-50%] translate-y-[-50%] text-2xl" onclick={()=>{goto("./bookappointment")}}>
   Book Appointment 
  </button>
</div>

<div class="w-full flex-center text-white bg-[#7d1b1f]">
    <div class="mt-2 font-semibold text-2xl">Treatment Solution For:</div>
</div>
