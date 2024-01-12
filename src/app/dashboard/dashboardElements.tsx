'use client';

import { useState, useEffect } from 'react';
import CardInfo from '@/components/dashboard/cardInfo';
import {
  UsersIcon,
  RectangleGroupIcon,
  PrinterIcon,
  PresentationChartBarIcon,
  PlusSmallIcon
} from '@heroicons/react/24/outline';
import CategorieTable from '@/components/dashboard/categoriesTable';
import AddModal from '@/components/dashboard/addCategory';


const cardInfoData = [
  {
    title: "Usuarios",
    quantity: 100,
    description: "Total users in the last 30 days",
    Icon: UsersIcon,
  },
  {
    title: "Repuestos",
    quantity: 100,
    description: "Repuestos agregados",
    Icon: RectangleGroupIcon,
  },
  {
    title: "Equipos",
    quantity: 100,
    description: "Equipos Agregados",
    Icon: PrinterIcon,
  },
  {
    title: "Planes de Resta",
    quantity: 100,
    description: "Planes de rentas establecidos",
    Icon: PresentationChartBarIcon,
  }
]

interface Data {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function DashboardElements({data}: {data: Data[][] | undefined}) {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({
    id: '',
    label: '',
    description: '',
  });

  const listProps = [
    {
      id: 'brand',
      label: 'Ingrese nueva marca',
      description: 'Codigo de la marca. ejemplo: KM',
      title: 'Marca de equipos',
    },
    {
      id: 'replaceBrand',
      label: 'Ingrese nueva categoriá',
      description: 'Codigo de la marca. ejemplo: KM',
      title: 'Marca de repuestos',
    },
    {
      id: 'equipmentCategory',
      label: 'Ingrese nueva categoriá',
      description: 'Codigo del repeusto. ejemplo: Multifuncionales',
      title: 'Categoria de equipos',
    },
    {
      id: 'replaceCategory',
      label: 'Ingrese nueva categoriá',
      description: 'Codigo del repeusto. ejemplo: Toners',
      title: 'Categoria de repuestos',
    },
    {
      id: 'rentalCategory',
      name: 'name',
      label: 'Ingrese nueva categoriá',
      description: 'Codigo del repeusto. ejemplo: Plan Economico',
      title: 'Categoria de rentas',
    }
  ]

  useEffect(() => {
    const handleAddModal = (e: MouseEvent) => {
      if(!(e.target instanceof HTMLElement)) return;
      addModalOpen && !e.target.closest('.add-modal') && setAddModalOpen(false);
    }
    addModalOpen && window.addEventListener('click', handleAddModal);
    return () => window.removeEventListener('click', handleAddModal);
  }, [addModalOpen]);

  return (
    <div className="flex min-h-screen flex-col p-6 gap-8">
      <h1 className="text-3xl font-semibold text-secondary">Dashboard</h1>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8'>
        {cardInfoData.map((cardInfo, index) => (
          <CardInfo
            key={index}
            title={cardInfo.title}
            quantity={cardInfo.quantity}
            description={cardInfo.description}
            Icon={cardInfo.Icon}
          />
        ))}
      </div>
      <h1 className="text-xl font-semibold text-secondary">Marcas y Categorías</h1>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8'>
        {listProps.map((listProp, index) => (
          <div key={`${listProp.id}-${index}`} 
            className='relative flex flex-col gap-3 border-1 border-solid border-default-300 rounded-xl pt-4'>
            <span className='px-4 text-sm font-semibold'>{listProp.title}</span>
            <button
              type='button'
              className='add-modal absolute rounded-full bg-[#ffffff23] right-4 top-4 hover:bg-primary transition-all hover:text-primary-foreground active:scale-110'
              onClick={() => {
                setAddModalOpen(true);
                setModalProps({
                  id: listProp.id,
                  label: listProp.label,
                  description: listProp.description,
                })
              }}
            >
              <PlusSmallIcon className='w-6 h-6' />
            </button>
            <CategorieTable data={data && data[index]} tableName={listProp.id}/>
          </div>
        ))}
      </div>
      {
        addModalOpen && (
          <AddModal
            id={modalProps.id}
            type='text'
            name="name"
            label={modalProps.label}
            description={modalProps.description}
            onClick={setAddModalOpen}
          />
        )
      }
    </div>
  );
}
