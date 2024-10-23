import ArrowRight from '../components/icons/ArrowRight';
import { useListCampaignsQuery } from '../services/endpoints/campaigns';
import NoDataFound from '../components/common/NoDataFound';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  const { data, isLoading } = useListCampaignsQuery({ filters: { limit: 5, status: 'latest' } });
  return (
    <>
      <div className="content__wrapper mt-3 mb-2">
        <h5 className="heading">Latest Campaigns</h5>
        <ArrowRight size="24" fill="#7cb14d" />
      </div>
      <div className="overflow-x-auto no-scrollbar campgins__list">
        {data
          ? data.map((campaign) => (
              <div key={campaign.id} className="min-w-[290px] campaign__item">
                <div className="featured__img" style={{ backgroundImage: `url(${campaign.featured_img})` }}></div>
                <div className="campaign__details">
                  <div className="campaign__desc">
                    <h5 className="campaign__title">{campaign.campaign_name}</h5>
                    <p className="text-xs mt-1 text-black font-semibold">{campaign.start_date}</p>
                  </div>
                  <Link to={`campaigns/${campaign.id}`} className="campaign_details_btn">
                    <ArrowRight />
                  </Link>
                </div>
                <span className={`campaign__status ${campaign.status == 'Ongoing' ? 'bg-red-800' : 'bg-primary-dark'}`}>{campaign.status}</span>
              </div>
            ))
          : !isLoading && <NoDataFound />}
      </div>
    </>
  );
};
export default IndexPage;
