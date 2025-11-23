<script>
  let {
    id = 0,
    file = "Arquivo sem nome",
    curriculumName = file,
    defaultAction = true,
  } = $props();

  function getFilename(file) {
    return "Someth1ng";
  }

</script>

<div class="curriculo-card">
  <div class="card-content">
    <div class="file-info">
      <div class="file-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p class="file-label">{getFilename(file)}</p>
    </div>
    <div class="card-footer">
      <p>{curriculumName}</p>
    </div>
  </div>
</div>

<style>
  .curriculo-card {
    cursor: pointer;
    aspect-ratio: 1;
    background: white;
    border: 2px solid #5b7bb4;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .curriculo-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(91, 123, 180, 0.2);
  }
  
  .card-content {
    display: grid;
    grid-template-rows: 10fr 2fr;
    width: 100%;
    height: 100%;
  }

  .file-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  
  .file-icon {
    width: 64px;
    height: 64px;
    color: #5b7bb4;
    margin-bottom: 0.5rem;
  }
  
  .file-icon svg {
    width: 100%;
    height: 100%;
  }
  
  .file-label {
    font-size: 1rem;
    color: #333;
    margin: 0;
  }

  .card-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5b7bb4;
    color: white;
    font-weight: 500;
    padding: .2rem 0;
    border-radius: 0 0 10px 10px;
  }
  
  @media (max-width: 768px) {
    .curriculo-card {
      padding: 1rem;
    }
    
    .file-icon {
      width: 48px;
      height: 48px;
    }
    
    .file-label {
      font-size: 0.9rem;
    }
  }
</style>