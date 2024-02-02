// scroll.ts

document.addEventListener("DOMContentLoaded", function() {
    const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const targetId: string = link.getAttribute('href')!.substring(1);
            const targetElement: HTMLElement | null = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
