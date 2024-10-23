import { useParams } from 'react-router-dom';
import { useSingleCampaignQuery } from '../services/endpoints/campaigns';
import NoDataFound from '../components/common/NoDataFound';
import MapPoint from '../components/icons/MapPoint';
import HistoryTwo from '../components/icons/History2';
import HistoryThree from '../components/icons/History3';

const SingleCampaign = () => {
  const { id } = useParams();
  const { data: campaign, isLoading } = useSingleCampaignQuery({ id: id });
  return (
    <div className="content__wrapper flex flex-col mt-0 pt-0 mb-28">
      {campaign ? (
        <>
          <img src={campaign.featured_img} alt="" className="rounded-md shadow-2xl mt-3" />
          <h5 className="heading">{campaign.campaign_name}</h5>
          <div className="flex flex-col gap-2 mt-5">
            <span className="flex gap-2">
              <MapPoint size="45" />
              {campaign.location}&nbsp;
              {campaign.masjid.masjid_name} {campaign.masjid.address_1} {campaign.masjid.address_2} {campaign.masjid.district} {campaign.masjid.state} {campaign.masjid.postal_code}
            </span>
            <span className="flex gap-2">
              <HistoryTwo /> {campaign.start_date}
            </span>
            <span className="flex gap-2">
              <HistoryThree /> {campaign.end_date}
            </span>
            <p className="font-xs font-medium">{campaign.campaign_description}</p>
          </div>
        </>
      ) : (
        !isLoading && <NoDataFound />
      )}
    </div>
  );
};
export default SingleCampaign;
