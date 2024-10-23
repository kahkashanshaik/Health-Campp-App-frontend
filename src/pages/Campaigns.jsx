import { useEffect, useState } from 'react';
import FiltersIcon from '../components/icons/Filters';
import Magnifier from '../components/icons/Magnifier';
import { useListCampaignsQuery } from '../services/endpoints/campaigns';
import ArrowRight from '../components/icons/ArrowRight';
import NoDataFound from '../components/common/NoDataFound';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const CampaignsPage = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [orderByFilter, setOrderByFilter] = useState('asc');
  const [searchFilter, setSearchFilter] = useState('');
  const [filters, setFilters] = useState({ status: statusFilter, orderBy: orderByFilter, search: searchFilter });
  const [searchParams] = useSearchParams();
  const search = searchParams.get('s');

  const { data, isLoading } = useListCampaignsQuery({ filters: filters });

  useEffect(() => {
    if (search) {
      setSearchFilter(search);
      setFilters((oldValue) => ({ ...oldValue, search: search }));
    }
  }, [search]);

  function actionFilterStatus(status) {
    setStatusFilter(status);
    setFilters((oldValue) => ({ ...oldValue, status: status }));
  }
  function actionOrderBy(event) {
    const orderBy = event.target.value;
    setOrderByFilter(orderBy);
    setFilters((oldValue) => ({ ...oldValue, orderBy: orderBy }));
  }
  function actionSearch(event) {
    const search = event.target.value;
    // if (search.length < 3) return;
    setSearchFilter(search);
    setFilters((oldValue) => ({ ...oldValue, search: search }));
  }

  return (
    <div className="content__wrapper pt-0 flex-col">
      <div className="global__search w-full">
        <div className="search_icon">
          <Magnifier size="16" color="#929597" />
        </div>
        <input type="text" className="bg-white" placeholder="Search Campaigns" defaultValue={searchFilter} onChange={() => actionSearch(event)} />
      </div>
      <div className="mt-5 flex justify-between items-center">
        <div className="flex items-center  space-x-2">
          <FiltersIcon size="25" />
          <label>Filters</label>
        </div>
        <div className="flex items-center space-x-2">
          <label>Sort By</label>
          <select className="bg-white form-select w-24" defaultValue={orderByFilter} onChange={() => actionOrderBy(event)}>
            <option value="asc">Latest</option>
            <option value="desc">Oldest</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="filter__tabs overflow-x-auto no-scrollbar">
          <button onClick={() => actionFilterStatus('all')} className={`filter_item ${statusFilter == 'all' ? 'active' : ''}`}>
            All
          </button>
          <button onClick={() => actionFilterStatus('ongoing')} className={`filter_item ${statusFilter == 'ongoing' ? 'active' : ''}`}>
            Ongoing
          </button>
          <button onClick={() => actionFilterStatus('upComing')} className={`filter_item ${statusFilter == 'upComing' ? 'active' : ''}`}>
            UpComing
          </button>
          <button onClick={() => actionFilterStatus('completed')} className={`filter_item ${statusFilter == 'completed' ? 'active' : ''}`}>
            Completed
          </button>
        </div>
        <div className="filter_tabs_content">
          {data && data.length > 0
            ? data.map((campaign) => (
                <div key={campaign.id} className="w-full campaign__item">
                  <div className="featured__img" style={{ backgroundImage: `url(${campaign.featured_img})` }}></div>
                  <div className="campaign__details">
                    <div className="campaign__desc">
                      <h5 className="campaign__title">{campaign.campaign_name}</h5>
                      <p className="text-xs mt-1 text-black font-semibold">{campaign.start_date}</p>
                    </div>
                    <Link to={`/campaigns/${campaign.id}`} className="campaign_details_btn">
                      <ArrowRight />
                    </Link>
                  </div>
                  <span className={`campaign__status ${campaign.status == 'Ongoing' ? 'bg-red-800' : 'bg-primary-dark'}`}>{campaign.status}</span>
                </div>
              ))
            : !isLoading && <NoDataFound />}
        </div>
      </div>
    </div>
  );
};
export default CampaignsPage;
