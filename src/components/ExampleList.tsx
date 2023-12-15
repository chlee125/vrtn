import { Link, useLocation } from 'react-router-dom'

const itemList = [
  { name: 'accordion-demo', path: 'accordion-demo' },
  { name: 'alert-demo', path: 'alert-demo' },
  { name: 'alert-dialog-demo', path: 'alert-dialog-demo' },
  { name: 'aspect-ratio-demo', path: 'aspect-ratio-demo' },
  { name: 'avatar-demo', path: 'avatar-demo' },
  { name: 'badge-demo', path: 'badge-demo' },
  { name: 'button-demo', path: 'button-demo' },
  { name: 'calendar-demo', path: 'calendar-demo' },
  { name: 'card-demo', path: 'card-demo' },
  { name: 'checkbox-demo', path: 'checkbox-demo' },
  { name: 'collapsible-demo', path: 'collapsible-demo' },
  { name: 'command-demo', path: 'command-demo' },
  { name: 'command-dialog-demo', path: 'command-dialog-demo' },
  { name: 'command-combobox', path: 'command-combobox' },
  { name: 'command-popover', path: 'command-popover' },
  { name: 'command-dropdown-menu', path: 'command-dropdown-menu' },
  { name: 'context-menu-demo', path: 'context-menu-demo' },
  { name: 'dialog-demo', path: 'dialog-demo' },
  { name: 'dropdown-menu-checkboxes', path: 'dropdown-menu-checkboxes' },
  { name: 'dropdown-menu-demo', path: 'dropdown-menu-demo' },
  {
    name: 'dropdown-menu-radio-group-demo',
    path: 'dropdown-menu-radio-group-demo',
  },
  { name: 'hover-card-demo', path: 'hover-card-demo' },
  { name: 'input-demo', path: 'input-demo' },
  { name: 'input-disabled', path: 'input-disabled' },
  { name: 'input-file', path: 'input-file' },
  { name: 'input-with-button', path: 'input-with-button' },
  { name: 'input-with-label', path: 'input-with-label' },
  { name: 'input-with-text', path: 'input-with-text' },
  { name: 'label-demo', path: 'label-demo' },
  { name: 'menubar-demo', path: 'menubar-demo' },
  { name: 'navigation-menu-demo', path: 'navigation-menu-demo' },
  { name: 'popover-demo', path: 'popover-demo' },
  { name: 'progress-demo', path: 'progress-demo' },
  { name: 'radio-group-demo', path: 'radio-group-demo' },
  { name: 'scroll-area-demo', path: 'scroll-area-demo' },
  { name: 'select-demo', path: 'select-demo' },
  { name: 'separator-demo', path: 'separator-demo' },
  { name: 'sheet-demo', path: 'sheet-demo' },
  { name: 'sheet-size', path: 'sheet-size' },
  { name: 'sheet-position', path: 'sheet-position' },
  { name: 'skeleton-demo', path: 'skeleton-demo' },
  { name: 'slider-demo', path: 'slider-demo' },
  { name: 'switch-demo', path: 'switch-demo' },
  { name: 'tabs-demo', path: 'tabs-demo' },
  { name: 'textarea-demo', path: 'textarea-demo' },
  { name: 'textarea-disabled', path: 'textarea-disabled' },
  { name: 'textarea-with-button', path: 'textarea-with-button' },
  { name: 'textarea-with-label', path: 'textarea-with-label' },
  { name: 'textarea-with-text', path: 'textarea-with-text' },
  { name: 'toast-demo', path: 'toast-demo' },
  { name: 'tooltip-demo', path: 'tooltip-demo' },
  { name: 'typography-blockquote', path: 'typography-blockquote' },
  { name: 'typography-demo', path: 'typography-demo' },
  { name: 'typography-large', path: 'typography-large' },
  { name: 'typography-lead', path: 'typography-lead' },
  { name: 'typography-list', path: 'typography-list' },
  { name: 'typography-p', path: 'typography-p' },
  { name: 'typography-small', path: 'typography-small' },
  { name: 'typography-muted', path: 'typography-muted' },
  { name: 'typography-table', path: 'typography-table' },
  { name: 'toggle-demo', path: 'toggle-demo' },
  { name: 'toggle-sm', path: 'toggle-sm' },
  { name: 'toggle-lg', path: 'toggle-lg' },
  { name: 'toggle-outline', path: 'toggle-outline' },
  { name: 'toggle-disabled', path: 'toggle-disabled' },
  { name: 'toggle-with-text', path: 'toggle-with-text' },
]
export default function ExampleList() {
  const location = useLocation()

  return (
    <div className="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 md:block">
      <nav id="nav" className="relative text-sm leading-6">
        <ul>
          {itemList.map((item) => (
            <Link
              to={item.path}
              className={`group mb-4 flex items-center text-sm font-semibold leading-6 ${
                location.pathname.includes(`/${item.path}`)
                  ? 'text-blue-500'
                  : ''
              } `}
            >
              <li key={item.path}>{item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}
