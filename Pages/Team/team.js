/* This is the javascript file for team*/
document.getElementById('year').textContent = new Date().getFullYear();

    function contact(email){
      window.location.href = 'mailto:'+email;
    }

    function openModal(e, btn){
      document.addEventListener('keydown', escHandler);
    }
    function closeModal(){
      const backdrop = document.getElementById('modalBackdrop');
      backdrop.style.display = 'none';
      document.removeEventListener('keydown', escHandler);
    }
    function escHandler(e){ if(e.key === 'Escape') closeModal(); }

    const input = document.getElementById('searchInput');
    input.addEventListener('input', ()=>{
      const q = input.value.trim().toLowerCase();
      document.querySelectorAll('.card').forEach(card=>{
        const name = card.dataset.name.toLowerCase();
        const role = card.dataset.role.toLowerCase();
        card.style.display = (name.includes(q) || role.includes(q)) ? '' : 'none';
      });
    });
    