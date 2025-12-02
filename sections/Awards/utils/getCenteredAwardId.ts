export const getCenteredAwardId = (
    container: HTMLDivElement,
    awards: typeof import("../data/awards").awardsData
): number | null => {
    let closestId: number | null = null;
    let closestDistance = Infinity;

    const children = Array.from(container.children);
    children.forEach((child, index) => {
        const rect = (child as HTMLElement).getBoundingClientRect();
        const childCenter = rect.left + rect.width / 2;
        const distance = Math.abs(childCenter - window.innerWidth / 2);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestId = awards[index].id;
        }
    });

    return closestId;
};
