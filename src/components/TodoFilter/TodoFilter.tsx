import { FilterBy } from '../../types/FilterBy';

type Props = {
  setFilterBy: (filter:FilterBy) => void;
  setQuery: (inputValue: string) => void;
  query: string;
};

export const TodoFilter: React.FC<Props> = (
  {
    setFilterBy,
    setQuery,
    query,
  },
) => {
  const handleClick = () => {
    setQuery('');
  };

  const handleOptionClick = (inputValue:FilterBy) => {
    setFilterBy(inputValue);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            onChange={
              (event) => handleOptionClick(event.target.value as FilterBy)
            }
          >
            <option value={FilterBy.ALL}>All</option>
            <option value={FilterBy.ACTIVE}>Active</option>
            <option value={FilterBy.COMPLETED}>Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          { query
            && (
              /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
              <button
                data-cy="clearSearchButton"
                type="button"
                className="delete"
                onClick={handleClick}
              />
            )}
        </span>
      </p>
    </form>
  );
};
