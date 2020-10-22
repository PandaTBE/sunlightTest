export async function send(url, body) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body), // данные могут быть 'строкой' или {объектом}!
            headers: {
                'Content-Type': 'application/json',
                'x-token-access': Math.random()
            }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
    } catch (error) {
        console.error('Ошибка:', error);
    }
}