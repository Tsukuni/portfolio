class Api::V1::AccessLogsController < ApplicationController
  before_action :set_access_log, only: %i[show update]

  def show
    render json: {
      total_amount: @access_log.total_amount,
      amount: @access_log.amount
    }
  end

  def update
    @access_log.update!(
      total_amount: @access_log.total_amount + 1,
      amount: @access_log.amount + 1
    )
    head :ok
  rescue Exceptions::InternalServerError => e
    logger.error(e)
    head :internal_server_error
  end

  private

  def set_access_log
    @access_log = AccessLog.find_by(created_at: Time.zone.today.all_day)
  end
end
