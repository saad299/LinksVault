import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
        <span className="text-sm font-mono text-green-400">link_vault/</span>
        <div className="flex gap-2">
          <Button variant="outline"></Button>
          <Button variant="outline"></Button>
          <Button variant="outline"></Button>
          <Button variant="outline"></Button>
          <Button variant="outline"></Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
