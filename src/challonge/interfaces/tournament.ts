import { NonEliminationTournamentData } from "./nonEliminationTournamentData";
import { OptionalDisplayData } from "./optionalDisplayData";

export interface Tournament {
    id:                                    number;
    name:                                  string;
    url:                                   string;
    description:                           string;
    tournament_type:                       string;
    started_at:                            Date;
    completed_at:                          Date | null;
    require_score_agreement:               boolean;
    notify_users_when_matches_open:        boolean;
    created_at:                            Date;
    updated_at:                            Date;
    state:                                 string;
    open_signup:                           boolean;
    notify_users_when_the_tournament_ends: boolean;
    progress_meter:                        number;
    quick_advance:                         boolean;
    hold_third_place_match:                boolean;
    pts_for_game_win:                      string;
    pts_for_game_tie:                      string;
    pts_for_match_win:                     string;
    pts_for_match_tie:                     string;
    pts_for_bye:                           string;
    swiss_rounds:                          number;
    private:                               boolean;
    ranked_by:                             string;
    show_rounds:                           boolean;
    hide_forum:                            boolean;
    sequential_pairings:                   boolean;
    accept_attachments:                    boolean;
    rr_pts_for_game_win:                   string;
    rr_pts_for_game_tie:                   string;
    rr_pts_for_match_win:                  string;
    rr_pts_for_match_tie:                  string;
    created_by_api:                        boolean;
    credit_capped:                         boolean;
    category:                              null;
    hide_seeds:                            boolean;
    prediction_method:                     number;
    predictions_opened_at:                 null;
    anonymous_voting:                      boolean;
    max_predictions_per_user:              number;
    signup_cap:                            number | null;
    game_id:                               number;
    participants_count:                    number;
    group_stages_enabled:                  boolean;
    allow_participant_match_reporting:     boolean;
    teams:                                 boolean;
    check_in_duration:                     null;
    start_at:                              Date;
    started_checking_in_at:                null;
    tie_breaks:                            string[];
    locked_at:                             null;
    event_id:                              null;
    public_predictions_before_start_time:  boolean | null;
    ranked:                                boolean | null;
    grand_finals_modifier:                 null;
    predict_the_losers_bracket:            boolean | null;
    spam:                                  null;
    ham:                                   null;
    rr_iterations:                         null;
    tournament_registration_id:            null;
    donation_contest_enabled:              null;
    mandatory_donation:                    null;
    non_elimination_tournament_data:       NonEliminationTournamentData;
    auto_assign_stations:                  null;
    only_start_matches_with_stations:      null;
    registration_fee:                      string;
    registration_type:                     string;
    split_participants:                    boolean;
    allowed_regions:                       any[] | null;
    show_participant_country:              null;
    program_id:                            null;
    program_classification_ids_allowed:    null;
    team_size_range:                       null;
    toxic:                                 null;
    use_new_style:                         null;
    optional_display_data:                 OptionalDisplayData;
    processing:                            boolean | null;
    oauth_application_id:                  null;
    hide_bracket_preview:                  boolean | null;
    description_source:                    string;
    subdomain:                             null;
    full_challonge_url:                    string;
    live_image_url:                        string;
    sign_up_url:                           null | string;
    review_before_finalizing:              boolean;
    accepting_predictions:                 boolean;
    participants_locked:                   boolean;
    game_name:                             string;
    participants_swappable:                boolean;
    team_convertable:                      boolean;
    group_stages_were_started:             boolean;
}
