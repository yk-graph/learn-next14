import Link from "next/link";
import { FaPen } from "react-icons/fa";

interface TaskEditButtonProps {
  id: string;
}

export const TaskEditButton: React.FC<TaskEditButtonProps> = ({ id }) => {
  return (
    <Link href={`/edit/${id}`}>
      <FaPen className="text-gray-700 hover:text-gray-600 text-lg cursor-pointer" />
    </Link>
  );
};
