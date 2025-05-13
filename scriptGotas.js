const createDrops = () => {
    const container = document.querySelector('.grid-container');

    const generateDrop = () => {
        for (let i = 0; i < 8; i++) { 
            const drop = document.createElement('div');
            drop.className = 'paint-drop';

            const randomLeft = Math.random() * 100; 
            drop.style.left = `${randomLeft}vw`; 

            const randomDuration = Math.random() * 3 + 2; 
            drop.style.animationDuration = `${randomDuration}s`;

            container.appendChild(drop);

            setTimeout(() => {
                container.removeChild(drop);
            }, randomDuration * 900); 
        }
    };

    setInterval(() => {
        generateDrop(); 
    }, 1000); 
};

createDrops();
