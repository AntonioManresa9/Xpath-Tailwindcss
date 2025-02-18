async function scrape() {
    const url = document.getElementById('url').value;  // Obtiene la URL del formulario
    const xpath = document.getElementById('xpath').value;  // Obtiene el XPath del formulario
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Cargando...';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('No se pudo obtener el HTML');
        const text = await response.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const nodes = doc.evaluate(xpath, doc, null, XPathResult.ANY_TYPE, null);

        let result = '';
        let node = nodes.iterateNext();
        while (node) {
            result += `<p>${node.textContent}</p>`;
            node = nodes.iterateNext();
        }

        resultsDiv.innerHTML = result || '<p>No se encontraron resultados</p>';
    } catch (error) {
        resultsDiv.innerHTML = `<p class='text-red-500'>Error: ${error.message}</p>`;
    }
}
