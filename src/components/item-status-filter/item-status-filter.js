import React from 'react';



const ItemStatusFilter = ({ filter, onFilterChange = () => { } }) => {

  const buttons = filterButtons.map(({ name, label }) => {
    const isActive = name === filter;
    const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <button key={name}
        type="button"
        onClick={() => onFilterChange(name)}
        className={classNames}>{label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;


export default class ItemStatusFilter extends React.Component {

  constructor(props) {
    super(props)
  }

  filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ];

  render() {
    return <div>123</div>
  }

}











