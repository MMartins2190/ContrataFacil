<script>
    import Header from "$lib/components/header.svelte";
</script>

<title>Sobre</title>

<Header />
<main>
    
    <div>
        <h1>Sobre o ContrataFácil...</h1>
        <h2>O problema visto</h2>
        <p>
          O processo de recrutamento tradicional enfrenta desafios significativos, especialmente quando há um grande volume de candidatos para avaliar. Empresas gastam horas triando currículos manualmente, muitas vezes perdendo talentos qualificados no meio de pilhas de documentos. Para os candidatos, é difícil saber se seu currículo está adequado e se destaca entre tantos outros. Essa ineficiência resulta em processos demorados, custos elevados e oportunidades perdidas para ambos os lados.
        </p>
        
        <h2>Como podemos te ajudar</h2>
        <p>
          Aqui procuramos facilitar a contratação de mão de obra qualificada, criando uma plataforma que especializa no gerenciamento de vagas, currículos e candidaturas. Empresas podem cadastrar-se para terem suas vagas listadas, decidindo quais ficarão em destaque no site. Candidatos conseguem criar e enviar seus currículos diretamente pela plataforma, com orientações sobre boas práticas para construí-los de forma eficaz. Para tornar o processo ainda mais inteligente, oferecemos recursos de IA que priorizam CVs relevantes para cada vaga e revisam currículos, ajudando candidatos a melhorarem suas chances — tudo disponível através de planos de assinatura.
        </p>
        
        <h2>O que queremos</h2>
        <p>
          Nosso objetivo é democratizar o acesso a oportunidades de trabalho de qualidade, tornando o processo de recrutamento mais justo, eficiente e transparente. Queremos que empresas de todos os tamanhos encontrem os melhores talentos rapidamente, enquanto candidatos tenham as ferramentas necessárias para se destacar e conquistar as vagas que desejam. Acreditamos que a tecnologia, quando bem aplicada, deve facilitar conexões humanas — não substituí-las. Por isso, nossa IA auxilia na triagem e análise, mas mantém as decisões finais onde elas devem estar: nas mãos das pessoas.
        </p>
    </div>
</main>

<style>
    main{
        min-height: 90vh;
        padding: 2rem 5rem;
    }

    div {
        background: repeating-linear-gradient(
            to bottom,
            rgba(81, 117, 184, .1),
            rgba(121, 170, 255, 0.1));
        padding: 1rem;
        border-radius: 20px;
    }

    h1, h2 {
        color: rgb(81, 117, 184);
    }

    h1 {
        font-size: 5ch;
    }
    
    h2 {
        margin:  2rem 3rem;
        font-size: 3ch;
    }

    p {
        line-height: 3ch;
    }
</style>