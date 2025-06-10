import { Cat } from '@/payload-types'

export default function DeleteCatDialog(
  { isOpen, onClose, onDelete, cat }: {
    isOpen: boolean, onClose: () => void, onDelete: () => void, cat: Cat
  }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs backdrop-grayscale">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 !text-2xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4 text-start">Delete {cat.name ? cat.name : "'No name'"}</h2>
        <div className="text-gray-700 mb-4">
          Do you really want to delete the following cat:
        </div>
        <div className='mb-4'>
          Name: {cat.name ? cat.name : "'No name'"} <br />
          Born: {cat.birthday ? cat.birthday: "'N.k'"} <br />          
        </div>
        <div>
          <button className='button button-primary me-2' onClick={onDelete}>
            Delete
          </button>          
          <button className='button' onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
