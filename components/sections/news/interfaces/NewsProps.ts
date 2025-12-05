export interface NewsItemProps {
    category?: string;
    date?: string;
    title?: string;
    description?: string;
    onReadMore?: () => void;
}