document.getElementById('appointmentForm')?.addEventListener('submit', e=>{
  e.preventDefault();
  const doctor=document.getElementById('doctor').value;
  const date=document.getElementById('date').value;
  const time=document.getElementById('time').value;
  if(!doctor||!date||!time){alert("Please fill all fields");return;}
  document.getElementById('result').innerText=`Appointment booked with ${doctor} on ${date} at ${time}.`;
});