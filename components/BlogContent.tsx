import { BlogPost } from "@/utils/blog";

interface BlogContentProps {
  content: BlogPost['content'];
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p key={index} className="mb-4">
                {block.content}
              </p>
            );
          case 'heading':
            return (
              <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                {block.content}
              </h2>
            );
          case 'list':
            return (
              <ul key={index} className="list-disc pl-6 mb-4">
                {block.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
} 