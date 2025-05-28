import React from 'react';
import { PlusCircle } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
      <div className="flex space-x-4">
        <div className="relative">
          <div className="flex items-center bg-gray-800 rounded-md px-4 py-2">
            <span className="text-gray-400 mr-2">Source</span>
            <span className="text-gray-200">All Sources</span>
            <span className="text-gray-400 ml-2">▼</span>
          </div>
        </div>
        
        <div className="relative">
          <div className="flex items-center bg-gray-800 rounded-md px-4 py-2">
            <span className="text-gray-400 mr-2">Input Type</span>
            <span className="text-gray-400 ml-2">▼</span>
          </div>
        </div>
      </div>
      
      <Button 
        variant="primary"
        icon={<PlusCircle size={18} />}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Schedule Ingest
      </Button>
    </div>
  );
};

export default Header;