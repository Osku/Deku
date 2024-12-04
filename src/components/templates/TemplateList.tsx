import React from 'react';
import { useCardStore } from '../../store/cardStore';
import { CardTemplate } from '../../types/card';
import { Layout, Maximize2, CreditCard } from 'lucide-react';

const defaultTemplates: CardTemplate[] = [
  {
    id: 'poker-card',
    name: 'Poker Card',
    width: 750,
    height: 1050,
    elements: [],
  },
  {
    id: 'tarot-card',
    name: 'Tarot Card',
    width: 700,
    height: 1200,
    elements: [],
  },
  {
    id: 'business-card',
    name: 'Business Card',
    width: 1050,
    height: 600,
    elements: [],
  }
];

export function TemplateList() {
  const { setActiveTemplate } = useCardStore();

  const handleSelectTemplate = (template: CardTemplate) => {
    setActiveTemplate(template);
  };

  const handleCreateCustom = () => {
    const customTemplate: CardTemplate = {
      id: crypto.randomUUID(),
      name: 'Custom Template',
      width: 800,
      height: 1000,
      elements: [],
    };
    setActiveTemplate(customTemplate);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-900">Templates</h2>
        <p className="text-sm text-gray-500">Choose a template to get started or create your own</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {defaultTemplates.map((template) => (
          <button
            key={template.id}
            onClick={() => handleSelectTemplate(template)}
            className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <div className="w-full aspect-[2/3] bg-gray-50 rounded flex items-center justify-center mb-4">
              {template.name === 'Poker Card' ? (
                <CreditCard size={48} className="text-gray-400" />
              ) : template.name === 'Tarot Card' ? (
                <Layout size={48} className="text-gray-400" />
              ) : (
                <CreditCard size={48} className="text-gray-400" />
              )}
            </div>
            <span className="text-sm font-medium text-gray-900">{template.name}</span>
            <span className="text-xs text-gray-500 mt-1">
              {template.width} × {template.height}px
            </span>
          </button>
        ))}

        <button
          onClick={handleCreateCustom}
          className="flex flex-col items-center p-6 bg-gray-50 border border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-gray-100 transition-all"
        >
          <div className="w-full aspect-[2/3] rounded flex items-center justify-center mb-4">
            <Maximize2 size={48} className="text-gray-400" />
          </div>
          <span className="text-sm font-medium text-gray-900">Custom Size</span>
          <span className="text-xs text-gray-500 mt-1">Create your own</span>
        </button>
      </div>
    </div>
  );
}